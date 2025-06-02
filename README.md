# 🚀 Portafolio Retrofuturista

Una Single Page Application desarrollada en Next.js con estética retrofuturista, efectos VHS y animaciones.

## ✨ Características

### 🎬 Pantalla de Carga Épica
- Fondo Synthwave con perspectiva 3D y efectos VHS
- Líneas solares animadas con gradientes
- Letras "DM" con efecto glitch y animación neón
- UFO pixelado con luces intermitentes que choca con la pantalla, rompiéndola en fragmentos que caen y desaparecen

### 🎨 Diseño Moderno
- Layout Bento con cajas organizadas
- Bordes brillantes estilo cyberpunk con efectos CSS modernos
- Toggle de tema claro/oscuro siempre visible
- Logo slider con inclinación y tecnologías
- Efectos de neón, gradientes y partículas animadas

### 🛠️ Tecnologías Utilizadas
- **Next.js 14** con App Router
- **React 18** con hooks modernos
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos utilitarios
- **Framer Motion** para animaciones fluidas
- GSAP para animaciones avanzadas
- Lucide React para iconos

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd portafolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter de código

## 📁 Estructura del Proyecto

```
portafolio/
├── app/
│   ├── components/
│   │   ├── LoadingScreen.tsx      # Pantalla de carga con efectos VHS
│   │   ├── ThemeToggle.tsx        # Toggle de tema claro/oscuro
│   │   ├── TechSlider.tsx         # Slider de tecnologías
│   │   ├── ProjectCard.tsx        # Tarjetas de proyectos
│   │   ├── AboutSection.tsx       # Sección de presentación
│   │   ├── ContactSection.tsx     # Sección de contacto
│   │   └── ThemeProvider.tsx      # Proveedor de contexto de tema
│   ├── globals.css                # Estilos globales y efectos CSS
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Página principal
├── public/                        # Archivos estáticos
├── package.json                   # Dependencias y scripts
├── tailwind.config.js            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Este archivo
```

## 🎨 Características de Diseño

### Efectos Visuales
- **Efectos VHS**: Líneas de escaneo, distorsión y interferencia
- **Glitch Text**: Animaciones de texto con efectos de falla
- **Neon Borders**: Bordes brillantes con animaciones de pulso
- **Glass Morphism**: Efectos de vidrio esmerilado
- **Cyber Grid**: Rejilla de fondo estilo cyberpunk
- **Partículas Flotantes**: Elementos decorativos animados

### Animaciones
- **Framer Motion**: Transiciones suaves y animaciones complejas
- **CSS Keyframes**: Animaciones personalizadas optimizadas
- **Hover Effects**: Interacciones responsivas al mouse
- **Loading Sequences**: Secuencias de carga cinematográficas

### Responsive Design
- Diseño adaptativo para móviles, tablets y desktop
- Grid system flexible con Tailwind CSS
- Componentes que se adaptan a diferentes tamaños de pantalla

## 🎯 Componentes Principales

### LoadingScreen
Pantalla de carga con:
- Fondo VHS animado
- Texto "DXM" con efectos glitch
- Animación de UFO
- Efecto de pantalla rota

### Layout Bento
Sistema de rejilla flexible con:
- Tarjetas de diferentes tamaños
- Efectos de hover interactivos
- Bordes neón animados
- Contenido adaptativo

### Theme System
Sistema de temas con:
- Modo claro y oscuro
- Persistencia en localStorage
- Transiciones suaves
- Toggle siempre visible

### TechSlider
Slider de tecnologías con:
- Logos de las tecnologías
- Animación de loop infinito y continuo
- Efectos de hover mejorados con rotación y escala

## 🔧 Personalización

### Colores y Temas
Edita `tailwind.config.js` para personalizar:
- Colores neón
- Gradientes
- Animaciones
- Breakpoints

### Contenido
Modifica los datos en `page.tsx`:
- Información personal
- Proyectos
- Enlaces sociales
- Tecnologías

### Animaciones
Ajusta las animaciones en cada componente:
- Duración
- Delays
- Easing functions
- Efectos de hover

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles iOS/Android

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Conectar con Vercel y desplegar
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Inspiración en la estética cyberpunk y retrofuturista
- Comunidad de Next.js y React
- Framer Motion por las increíbles animaciones
- Tailwind CSS por el sistema de diseño

---

**Desarrollado con 💜 por DXM**

*¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!*