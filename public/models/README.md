# 3D Model Setup Instructions

## Current Status
Your hero section now has a working 3D scene with GSAP scroll-triggered rotation! A placeholder wireframe sphere is currently displayed.

## Adding Your Blender 3D Model

### Option 1: Using Blender (Recommended)
1. Open your `.blend` file in Blender
2. Go to `File > Export > glTF 2.0 (.glb/.gltf)`
3. Choose `.glb` format (binary - single file)
4. Export the file as `hero-model.glb`
5. Place it in this directory: `/public/models/hero-model.glb`

### Option 2: Using Online Converters
If you don't have Blender installed, you can use online converters:
- [AnyConv](https://anyconv.com/) - Free online file converter
- [Convertio](https://convertio.co/) - Supports many formats
- [Clara.io](https://clara.io/) - Online 3D viewer and converter

Upload your `.blend` file and download it as `.glb` format.

### Option 3: Create from Tripo3D
If you're using Tripo3D services:
1. Export your model in `.glb` format
2. Save it as `hero-model.glb` in this directory

## Animation Features
The 3D model will now:
- **Rotate on scroll**: Model rotates as you scroll down the page
- **Floating effect**: Subtle up/down animation
- **Responsive**: Works on mobile and desktop
- **Performance optimized**: Uses React Three Fiber for smooth rendering

## Model Optimization Tips
For best web performance:
1. **Keep it simple**: Under 50MB file size
2. **Reduce polygons**: Target under 100k vertices
3. **Compress textures**: Use JPG/WebP format
4. **Test performance**: Check mobile device performance

## Customization
To adjust the animation or model appearance:
- `Model3D.tsx` - Main 3D model component
- `Scene3D.tsx` - Lighting and environment settings
- `HomeSection.tsx` - Integration with hero section
- `custom.css` - Position and responsiveness

## Troubleshooting
- **Model not showing**: Check browser console for errors
- **Performance issues**: Reduce model complexity
- **Wrong rotation**: Adjust rotation values in `Model3D.tsx`
- **Position issues**: Modify camera position in `Scene3D.tsx`