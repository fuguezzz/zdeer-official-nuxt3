<template>
  <div class="absolute text-white flex flex-col sm:top-[40%] sm:left-[15%] sm:transform-none bottom-10 left-0 right-0 px-4 sm:px-0">
    <div class="flex items-center sm:justify-start justify-center sm:mb-4 md:mb-5 lg:mb-8">
      <!-- <span class="font-semibold sm:text-lg text-sm sm:tracking-[3px] tracking-[2px]">OF&nbsp;COURSE</span> -->
      <span class="font-normal sm:text-sm md:text-base lg:text-3xl tracking-wider opacity-60">34通道&nbsp|&nbsp人声清晰</span>
      <!-- <span class="block rounded-full bg-white sm:w-1 sm:h-1 w-[2px] h-[2px] sm:mx-3 mx-2"></span> -->
      <!-- <SvgoLogo :fontControlled="false" class="sm:h-[20px] h-[15px] text-white" /> -->
    </div>
    <h1
      class="sm:text-[36px] md:text-[40px] lg:text-[46px] xl:text-[52px] text-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] leading-[40px] sm:text-left text-center font-normal sm:font-normal"
    >
      <span class="shrink-0">{{ $t('s4_1') }}</span>
      <!-- <span class="shrink-0">{{ $t('s1_2') }}</span> -->
    </h1>
  </div>
  <picture>
    <source media="(max-width: 639px)" srcset="https://zdeer.com.cn/uploadfiles/2025/03/20250321172918130.jpg?6LWE5rqQIDU4LTEwMC5qcGc=" />
    <source media="(min-width: 640px)" srcset="https://zdeer.com.cn/uploadfiles/2025/03/20250321172912558.jpg?6LWE5rqQIDYzLTEwMC5qcGc=" />
    <img
      class="img-bg"
      src="https://zdeer.com.cn/uploadfiles/2025/03/20250321172912558.jpg?6LWE5rqQIDYzLTEwMC5qcGc="
      alt="黑金牛奶光美容仪背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from '~/hooks/useImgHost';
import Popover from '~/components/Popover.vue';
import { useIsMobile } from '@/hooks/useIsMobile';
const isMobile = useIsMobile();

const { makeImgHost } = useImgHost();
</script>
