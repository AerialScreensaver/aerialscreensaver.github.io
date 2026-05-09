#!/usr/bin/env bash
#
# encode-video.sh — convert a screen recording into a web-ready MP4 loop for the site.
#
# Usage:
#   scripts/encode-video.sh <input.mov> [output.mp4]
#
# Defaults output to public/videos/<basename>.mp4 if you don't supply a target.
# Targets: 1280px wide, H.264, no audio, fast-start so the browser plays before
# the file is fully downloaded. Aim for 5–10 second loops so the file stays
# under a couple of MB.

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "usage: $0 <input.mov> [output.mp4]" >&2
  exit 1
fi

input="$1"
if [ ! -f "$input" ]; then
  echo "input file not found: $input" >&2
  exit 1
fi

if [ $# -ge 2 ]; then
  output="$2"
else
  base="$(basename "${input%.*}")"
  mkdir -p public/videos
  output="public/videos/${base}.mp4"
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install with: brew install ffmpeg" >&2
  exit 1
fi

ffmpeg -y -i "$input" \
  -vcodec libx264 -crf 23 -preset slow -movflags +faststart \
  -vf "scale=1280:-2" -an \
  "$output"

echo "→ $output"
ls -lh "$output"
