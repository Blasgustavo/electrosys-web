# Electros.web

Página web oficial del proyecto ElectroSys para GitHub Pages.

## Propósito

Este sitio sirve como punto de entrada central para:
- **Privacidad**: Política de privacidad y protección de datos
- **Documentación**: Guías y manuales de usuario
- **Otros**: Información adicional del proyecto

## Desarrollo Local

Para ver el sitio localmente:

```bash
# Opción 1: Abrir directamente en navegador
open index.html

# Opción 2: Usar un servidor local
npx serve .

# Opción 3: Python
python -m http.server 8000
# Luego abrir http://localhost:8000
```

## Publicación en GitHub Pages

1. Hacer fork o clone de este repositorio
2. En Settings > Pages, seleccionar:
   - Source: Deploy from a branch
   - Branch: main / (root)
3. El sitio se publicará automáticamente en:
   `https://[username].github.io/[repo-name]/`

## Estructura del Proyecto

```
Electros.web/
├── index.html          # Página principal
├── privacy.html        # Política de privacidad
├── docs.html            # Documentación
├── other.html          # Otros recursos
├── css/
│   └── styles.css     # Estilos compartidos
├── js/
│   └── main.js        # JavaScript principal
├── assets/
│   └── logo.svg       # Logo del proyecto
└── README.md           # Este archivo
```

## Stack Tecnológico

- HTML5 semántico
- CSS3 con custom properties (design system ElectroSys)
- JavaScript vanilla (ES6+)
- Google Fonts (Inter)

## Design System

El sitio utiliza el mismo sistema de diseño que la aplicación ElectroSys:
- Paleta de colores: Navy, Electric Blue, Accent Purple
- Tipografía: Inter
- Glass morphism y bordes translúcidos
- Animaciones sutiles

## Contacto

Para soporte o consultas: [contacto@electrosys.example.com]

## Licencia

© 2026 ElectroSys. Todos los derechos reservados.
