<script setup>
import Navbar from '@/components/Navbar.vue';
import Copyright from '@/components/Copyright.vue';
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
const title = computed(() => (route.meta.title ? `zdeer左点官方网站 - ${route.meta.title}` : 'zdeer左点官方网站'));

// meta配置
useSeoMeta({
  description: t('layouts.description'),
  keywords: t('layouts.keywords'),
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  charset: 'utf-8',
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <Navbar />
        <slot />
        <!-- <Copyright class="delay-1000 w-full" />
        <Copyright class="delay-[1100ms] relative top-10" /> -->
      </Body>
    </Html>
  </div>
</template>
