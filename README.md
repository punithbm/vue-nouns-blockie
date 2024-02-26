# vue-nouns-blockie

Vue package that generates custom nouns avatar for web3 addresses and strings. Easily integrate web3 avatars into your Vue projects with minimal setup.

## Installation

```bash
npm install vue-nouns-blockie
```

or

```bash
yarn add vue-nouns-blockie
```

## Usage

Import and use NounsBlockie in your Vue component:

```bash
<template>
  <div>
    <NounsBlockie :input="userAddress" />
  </div>
</template>

<script>
import { NounsBlockie } from 'vue-nouns-blockie';

export default {
  components: {
    NounsBlockie
  },
  data() {
    return {
      userAddress: '0x...'
    };
  }
}
</script>
```

## Props

```bash
- input:String (required) - The web3 address or string to generate the avatar for.
- height?: string (optional) - required height for the image;
- width?:string (optional) - required height for the image;
- altText?: string (optional) - Alt text for the image;
- shape?: string (optional) - Type of avatar, "square" | "rounded" | "circle";
```

## Keywords

- Vue
- Nouns
- Avatar
- Web3
- Blockchain

## License

MIT
