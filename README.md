# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Icon Usage
```bash
<NuxtIcon name="close" class="text-red-600" />

NOTE: name is match with file name on /assets/icons folder
```

## Cookies
```bash
const cookieName = useCookie("key")
// Update cookie value
cookieName.value = "updated value"
// Delete cookie
cookieName.value = null
```

## LocalStorage
```bash
import { useStorage } from '@vueuse/core'

const lsName = useLocalStorage("key", "")
// Update LocalStorage value
lsName.value = "updated value"
// Delete LocalStorage
lsName.value = null
```

## Read data from .env
```bash
const config = useRuntimeConfig();
const data = config.public.api
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
