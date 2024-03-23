# Proyecto NestJS con Arquitectura Hexagonal

Este proyecto es un ejemplo de una aplicación NestJS que sigue la arquitectura hexagonal, también conocida como arquitectura de puertos y adaptadores. La arquitectura hexagonal se centra en desacoplar la lógica de negocio de los detalles de implementación y la infraestructura, lo que mejora la modularidad, la testabilidad y la mantenibilidad del código.

## Instalación

Para instalar las dependencias, utiliza [pnpm](https://pnpm.io/), un gestor de paquetes que puede ser más eficiente que npm o yarn:

```bash
pnpm install
```

## Ejecución

Para arrancar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run start:dev
```

Este comando iniciará la aplicación en modo de desarrollo, lo que permitirá realizar cambios en el código y ver los resultados automáticamente.

## Estructura del Proyecto

La estructura del proyecto sigue los principios de la arquitectura hexagonal. Aquí tienes una vista general de la estructura:

```
src
│   ├── app.module.ts
│   ├── common
│   │   └── use-case.ts
│   ├── config
│   │   └── Typeorm.ts
│   ├── domain
│   │   ├── domain.module.ts
│   │   └── entities
│   │       └── user
│   │           ├── user-entity.repository.port.ts
│   │           └── user.entity.ts
│   ├── main.ts
│   └── users
│       ├── infraestructure
│       │   └── presenters
│       │       └── adapters
│       ├── presentation
│       │   ├── create-user-dto
│       │   │   └── create-user.dto.ts
│       │   ├── index.ts
│       │   ├── users.controller.ts
│       │   └── users.module.ts
│       ├── presenters
│       │   ├── index.ts
│       │   └── user.presenter.port.ts
│       └── use-cases
│           ├── create-user
│           │   ├── create-user.use-case.ts
│           │   └── index.ts
│           └── errors
│               ├── create-user-error-types
│               ├── create-user-required-request.error.ts
│               └── index.ts

```
