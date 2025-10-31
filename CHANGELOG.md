# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2024-01-31

### Added

#### Configuración Inicial
- Inicialización del proyecto React con Vite y TypeScript
- Configuración de Tailwind CSS v3 (estable)
- Configuración de puerto 7300 para el servidor de desarrollo
- Estructura de carpetas organizada según principios SOLID

#### Routing y Navegación
- Instalación y configuración de React Router DOM
- Creación de `routes.ts` para gestión centralizada de rutas
- Configuración de rutas básicas:
  - `/` - Home
  - `/operaciones` - Operaciones
- Navegación funcional desde Sidebar y URL directa

#### Componentes de Layout
- `GeneralLayout.tsx` - Layout principal que organiza la estructura general
- `Sidebar.tsx` - Barra lateral con navegación entre rutas
- `Upbar.tsx` - Barra superior del layout
- `Content.tsx` - Contenedor de contenido principal con soporte para children

#### Componentes Comunes Reutilizables
- `Table.tsx` - Componente de tabla agnóstico y reutilizable basado en TanStack React Table
  - Soporte para tipos genéricos con tipado estricto
  - Totalmente agnóstico y reutilizable
  - Estilos con Tailwind CSS
- `Button.tsx` - Componente de botón completamente agnóstico y reutilizable
  - Extiende todas las props HTML nativas del botón
  - Variantes predefinidas (primary, secondary, danger)
  - Totalmente personalizable mediante className y props HTML

#### Páginas
- `Home.tsx` - Página principal
- `Operaciones.tsx` - Página de operaciones con tabla y botón de registro
  - Implementación de tabla con datos de ejemplo
  - Botón "Registrar operacion" funcional

#### Configuración y Reglas
- Archivo `.cursor/rules.md` con reglas CORE obligatorias del proyecto:
  - Principios SOLID
  - Arquitectura ordenada
  - Tipado estricto (sin `any` o `implicit any`)
  - Evitar comentarios innecesarios y emojis
  - Evitar hiperextensión de archivos
  - Nomenclatura declarativa
  - Principio YAGNI
  - Claridad de objetivos

### Technical Details

#### Dependencias Instaladas
- `react` - Framework principal
- `react-dom` - Renderizado en DOM
- `react-router-dom` - Enrutamiento
- `@tanstack/react-table` - Funcionalidad de tablas
- `tailwindcss@^3` - Framework CSS (versión estable)
- `postcss` - Procesador CSS
- `autoprefixer` - Auto-prefijos CSS
- TypeScript con configuración estricta

#### Estructura del Proyecto
```
frontend/
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables agnósticos
│   │   │   ├── Button.tsx
│   │   │   └── Table.tsx
│   │   └── layout/           # Componentes de layout
│   │       ├── Content.tsx
│   │       ├── GeneralLayout.tsx
│   │       ├── Sidebar.tsx
│   │       └── Upbar.tsx
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   └── Operaciones.tsx
│   ├── routes.ts            # Configuración centralizada de rutas
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

### Quality Assurance
- ✅ Tipado estricto TypeScript sin `any` o `implicit any`
- ✅ Todos los tipos explícitos y bien definidos
- ✅ Sin errores de linter
- ✅ Código limpio siguiendo reglas CORE
- ✅ Componentes completamente reutilizables y agnósticos
- ✅ Separación adecuada de responsabilidades (SOLID)

### Repository
- Repositorio GitHub: `https://github.com/clementeaf/trade-saas-fullstack`
- Rama principal: `main`

