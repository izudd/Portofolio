#!/bin/bash

# Script to create placeholder images for portfolio projects
# These are temporary until you add real screenshots

echo "🎨 Creating placeholder images..."

# Create images directory if doesn't exist
mkdir -p public/images

# Project names and colors
declare -A projects=(
    ["pam-jaya"]="#00ff41"
    ["auditbro"]="#00d9ff"
    ["pipeline-locator"]="#bd00ff"
    ["administrator-office"]="#ffed4e"
    ["kelas-online"]="#ff0055"
    ["skripsiboost"]="#00ff88"
    ["bank-statement"]="#ff6b35"
)

# Create SVG placeholders
for project in "${!projects[@]}"; do
    color="${projects[$project]}"
    
    cat > "public/images/${project}.svg" << EOF
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${project}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="#1a1a2e"/>
  <rect width="1200" height="630" fill="url(#grad-${project})"/>
  
  <!-- Grid Pattern -->
  <defs>
    <pattern id="grid-${project}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid-${project})"/>
  
  <!-- Project Name -->
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${color}" text-anchor="middle" opacity="0.8">
    ${project^^}
  </text>
  
  <!-- Placeholder Text -->
  <text x="600" y="350" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" opacity="0.5">
    Screenshot Coming Soon
  </text>
  
  <!-- Icon -->
  <circle cx="600" cy="420" r="40" fill="none" stroke="${color}" stroke-width="2" opacity="0.4"/>
  <path d="M 600 390 L 600 450 M 570 420 L 630 420" stroke="${color}" stroke-width="2" opacity="0.4"/>
</svg>
EOF
    
    echo "✅ Created placeholder for: ${project}"
done

echo ""
echo "🎉 Placeholder images created!"
echo ""
echo "📝 These are temporary placeholders."
echo "   Replace with real screenshots in public/images/"
echo ""
echo "Files created:"
ls -1 public/images/*.svg

echo ""
echo "⚠️  Note: SVG placeholders will work, but PNG/JPG is better!"
echo "   Check public/images/README.md for guidelines."
