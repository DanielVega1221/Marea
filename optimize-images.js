import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, 'src', 'assets', 'productos');
const OUTPUT_DIR = join(__dirname, 'src', 'assets', 'productos');

// Configuración de optimización
const MAX_WIDTH = 1200; // Ancho máximo
const QUALITY = 85; // Calidad WebP (0-100)

async function optimizeImages() {
  if (!existsSync(INPUT_DIR)) {
    console.error(`❌ La carpeta ${INPUT_DIR} no existe`);
    return;
  }

  const files = readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext);
  });

  console.log(`📸 Encontradas ${imageFiles.length} imágenes para optimizar\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    try {
      const inputPath = join(INPUT_DIR, file);
      const outputName = basename(file, extname(file)) + '.webp';
      const outputPath = join(OUTPUT_DIR, outputName);

      // Obtener tamaño original
      const fs = await import('fs');
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;
      totalOriginalSize += originalSize;

      // Procesar imagen
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Redimensionar si es necesario y convertir a WebP
      await image
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: QUALITY,
          effort: 6 // Mayor esfuerzo de compresión (0-6)
        })
        .toFile(outputPath);

      // Obtener tamaño optimizado
      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = optimizedStats.size;
      totalOptimizedSize += optimizedSize;

      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      const originalKB = (originalSize / 1024).toFixed(1);
      const optimizedKB = (optimizedSize / 1024).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   ${metadata.width}x${metadata.height} → ${outputName}`);
      console.log(`   ${originalKB}KB → ${optimizedKB}KB (${reduction}% reducción)\n`);

    } catch (error) {
      console.error(`❌ Error procesando ${file}:`, error.message);
    }
  }

  const totalReduction = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
  const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
  const totalOptimizedMB = (totalOptimizedSize / 1024 / 1024).toFixed(2);

  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN:');
  console.log(`   Total original: ${totalOriginalMB} MB`);
  console.log(`   Total optimizado: ${totalOptimizedMB} MB`);
  console.log(`   Reducción total: ${totalReduction}%`);
  console.log('='.repeat(50));
}

optimizeImages().catch(console.error);
