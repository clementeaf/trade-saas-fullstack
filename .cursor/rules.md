# ⚠️ REGLAS CORE OBLIGATORIAS - SIN EXCEPCIONES ⚠️

# Reglas de Desarrollo - Aplicación Universal (Frontend y Backend)

## ⚠️ IMPORTANTE: ESTAS SON REGLAS CORE OBLIGATORIAS ⚠️

**ESTAS REGLAS DEBEN CUMPLIRSE SIEMPRE, SIN EXCEPCIONES, EN TODO EL PROYECTO**

- ❌ **NO hay excepciones** a estas reglas
- ❌ **NO se pueden ignorar** bajo ninguna circunstancia
- ❌ **NO son sugerencias**, son **REGLAS OBLIGATORIAS**
- ✅ **DEBEN aplicarse** en frontend y backend
- ✅ **DEBEN verificarse** antes de cualquier entrega de código
- ✅ **DEBEN respetarse** en cada línea de código escrita

## Principios Fundamentales

### 1. Principios SOLID
- **Single Responsibility Principle (SRP)**: Cada clase, módulo o función debe tener una única responsabilidad
- **Open/Closed Principle (OCP)**: Las entidades deben estar abiertas para extensión pero cerradas para modificación
- **Liskov Substitution Principle (LSP)**: Los objetos deben ser reemplazables por instancias de sus subtipos
- **Interface Segregation Principle (ISP)**: No forzar a las clases a implementar interfaces que no usan
- **Dependency Inversion Principle (DIP)**: Depender de abstracciones, no de concreciones

### 2. Arquitectura Ordenada
- Organización clara de archivos y carpetas
- Separación de responsabilidades por capas
- Estructura modular y escalable
- Convenciones de nomenclatura consistentes

### 3. Comentarios y Código Limpio
- **Evitar comentarios innecesarios**: El código debe ser autodocumentado
- **Prohibir emojis**: No usar emojis en código, comentarios, nombres de variables o funciones
- Comentarios solo cuando añaden valor real y explican el "por qué", no el "qué"
- JSDoc/TSDoc solo para APIs públicas o funciones complejas

### 4. Organización de Código (OBLIGATORIO)
- **Evitar hiperextensión de archivos**: Dividir archivos grandes en módulos más pequeños
- **Separación adecuada de funciones**: Cada función debe tener un propósito claro y único
- **Límite obligatorio**: Máximo 300-400 líneas por archivo (NO HAY EXCEPCIONES)
- **Dividir obligatoriamente** cuando un archivo maneja múltiples responsabilidades

### 5. Nomenclatura Declarativa
- **Funciones y variables claras**: Nombres que expresen claramente su propósito
- **Objetivos y finalidades definidas**: Cada elemento debe tener un propósito explícito
- Usar verbos para funciones: `getUserData()`, `calculateTotal()`, `validateInput()`
- Usar sustantivos descriptivos para variables: `userData`, `totalAmount`, `isValid`

### 6. Principio YAGNI (You Aren't Gonna Need It)
- **No inventar código innecesario**: Solo implementar lo que se solicita explícitamente
- **No asumir funcionalidades futuras**: Evitar código "por si acaso" o especulativo
- **No generar código sin claridad**: Si no hay un requerimiento claro, no inventar soluciones

### 7. Claridad de Objetivos
- **Preguntar antes de inventar**: Si el objetivo final no está claro, hacer preguntas específicas
- **Prohibir funciones con TODO**: Nunca crear funciones incompletas o con comentarios TODO
- **Requisitos claros**: Si falta información, solicitar especificaciones antes de implementar
- Implementar solo lo que tiene un propósito definido y claro

## Aplicación Práctica

### Estructura de Archivos
```
src/
  ├── modules/          # Módulos por funcionalidad
  │   ├── user/
  │   │   ├── services/
  │   │   ├── controllers/
  │   │   └── models/
  │   └── auth/
  ├── shared/           # Código compartido
  │   ├── utils/
  │   ├── types/
  │   └── constants/
  └── config/           # Configuraciones
```

### Ejemplo de Buenas Prácticas

✅ **Correcto**:
```typescript
/**
 * Calcula el total de una orden de compra
 * @param items - Array de items de la orden
 * @returns Total calculado con impuestos incluidos
 */
function calculateOrderTotal(items: OrderItem[]): number {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  return subtotal + tax;
}
```

❌ **Incorrecto**:
```typescript
// Función con propósito ambiguo
function process(data: any): any {
  // TODO: implementar lógica
  // 😀 esto podría ser útil en el futuro
  return data;
}
```

## ⚠️ CHECKLIST OBLIGATORIO DE VERIFICACIÓN ⚠️

**ESTE CHECKLIST ES OBLIGATORIO Y DEBE CUMPLIRSE COMPLETAMENTE ANTES DE ENTREGAR CUALQUIER CÓDIGO**

Antes de entregar cualquier código, **OBLIGATORIAMENTE** verificar que se cumple **TODAS** estas reglas:

- [ ] **OBLIGATORIO**: ¿Respetan los principios SOLID?
- [ ] **OBLIGATORIO**: ¿La arquitectura está ordenada y organizada?
- [ ] **OBLIGATORIO**: ¿No hay comentarios innecesarios ni emojis?
- [ ] **OBLIGATORIO**: ¿Los archivos no exceden límites razonables de líneas?
- [ ] **OBLIGATORIO**: ¿Las funciones están adecuadamente separadas?
- [ ] **OBLIGATORIO**: ¿Los nombres son declarativos y claros?
- [ ] **OBLIGATORIO**: ¿Cada elemento tiene un objetivo y finalidad definidos?
- [ ] **OBLIGATORIO**: ¿No hay código inventado o innecesario?
- [ ] **OBLIGATORIO**: ¿No hay funciones con TODO o contenido incompleto?
- [ ] **OBLIGATORIO**: ¿Se preguntó cuando faltaba claridad en los objetivos?

**NO se puede entregar código si alguna de estas verificaciones falla. TODAS deben cumplirse sin excepciones.**

## ⚠️ INSTRUCCIONES OBLIGATORIAS PARA EL ASISTENTE ⚠️

**ESTAS INSTRUCCIONES SON REGLAS CORE Y DEBEN CUMPLIRSE SIN EXCEPCIONES**

### Reglas Absolutas (Sin Excepciones)

1. **SIEMPRE** aplicar estos principios en frontend y backend
2. **NUNCA** generar código sin claridad sobre su propósito
3. **SIEMPRE** preguntar si el objetivo no está claro
4. **NUNCA** crear funciones con TODO o código especulativo
5. **SIEMPRE** mantener archivos en tamaños razonables
6. **SIEMPRE** usar nombres declarativos y claros
7. **NUNCA** incluir emojis en código o comentarios
8. **SIEMPRE** respetar principios SOLID y arquitectura ordenada
9. **NUNCA** ignorar estas reglas bajo ninguna circunstancia
10. **SIEMPRE** verificar que el código cumple todas las reglas antes de entregarlo

### Advertencia Final

**CUALQUIER CÓDIGO QUE NO CUMPLA ESTAS REGLAS CORE SERÁ RECHAZADO**

No hay excusas, no hay excepciones, no hay "casos especiales". Estas reglas son absolutas.

