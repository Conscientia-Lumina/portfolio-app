/**
 * Video URLs configuration
 * Maps video filenames to their Vercel Blob storage URLs
 */

const BLOB_BASE_URL = 'https://jcnwtqgnls10ugm9.public.blob.vercel-storage.com';

export const videoUrls: Record<string, string> = {
  'kukadance.mp4': `${BLOB_BASE_URL}/videos/kuka/kukadance.mp4`,
  'BMW_Luegi_Entnahme.mp4': `${BLOB_BASE_URL}/videos/kuka/BMW_Luegi_Entnahme.mp4`,
  'linearextract.mp4': `${BLOB_BASE_URL}/videos/kuka/linearextract.mp4`,
  'smallextract.mp4': `${BLOB_BASE_URL}/videos/kuka/smallextract.mp4`,
  'speedextract.mp4': `${BLOB_BASE_URL}/videos/kuka/speedextract.mp4`,
  'trimming.mp4': `${BLOB_BASE_URL}/videos/kuka/trimming.mp4`,
};

export function getVideoUrl(filename: string): string {
  return videoUrls[filename] || '';
}
