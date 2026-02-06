# 📸 Dynamic Photos System - Quick Guide

Your Valentine's app now **automatically** loads photos - no more hardcoding filenames! 🎉

## How It Works

1. Photos are stored in `memories/` folder
2. `photos.json` contains the list of all photo filenames
3. `proposal.js` loads photos dynamically from `photos.json`
4. Photos are picked randomly when shown to Tanisha

## When You Add New Photos

### Quick Method (Recommended):
```bash
cd v3
./update-photos.sh
```

That's it! The script automatically:
- Scans the memories folder
- Finds all image files (.jpg, .jpeg, .png, .gif)
- Updates photos.json
- Shows you how many photos were found

### Manual Method:
```bash
cd v3
ls memories/ | grep -E '\.(jpg|jpeg|png)$' | jq -R -s -c 'split("\n") | map(select(length > 0))' > memories/photos.json
```

## Current Photos

You currently have 6 photos loaded:
- 20241201_113752 (1).jpg
- 20241202_065157.jpg
- 20241202_070101.jpg
- 20241202_083323.jpg
- 20241203_103520.jpg
- 20241203_141720.jpg

## Benefits

✅ No more editing proposal.js
✅ Add photos with any filename
✅ Automatically updates when you run the script
✅ Fully dynamic - supports unlimited photos

## Troubleshooting

**Q: Photos not showing up?**
A: Run `./update-photos.sh` to regenerate photos.json

**Q: Script won't run?**
A: Make sure it's executable: `chmod +x update-photos.sh`

**Q: Want to check what's loaded?**
A: Look at `memories/photos.json` or open browser console

---

Made with 💕 for Tanisha (Buddhu)
