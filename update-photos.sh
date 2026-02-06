#!/bin/bash
# Script to automatically update photos.json with all image files in memories folder

cd "$(dirname "$0")"

echo "Scanning memories folder for photos..."

# Generate JSON array of photo filenames
ls memories/ | grep -E '\.(jpg|jpeg|png|JPG|JPEG|PNG|gif|GIF)$' | jq -R -s -c 'split("\n") | map(select(length > 0))' > memories/photos.json

# Count photos
PHOTO_COUNT=$(cat memories/photos.json | jq 'length')

echo "✓ Updated photos.json with $PHOTO_COUNT photos"
echo "Photo list:"
cat memories/photos.json | jq -r '.[]' | sed 's/^/  - /'

echo ""
echo "Done! Your photos are now ready to use."
