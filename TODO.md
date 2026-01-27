# Lighthouse Optimization TODO

## Quick Wins (91-93% Target)

### 1. Install Dependencies
- [ ] Install @nuxt/image module for image optimization

### 2. Configuration Updates
- [ ] Add @nuxt/image to nuxt.config.ts modules

### 3. Meta Tags & SEO
- [ ] Enhance useHead in app.vue with description, viewport, charset
- [ ] Add font preloading in index.vue useHead
- [ ] Add Open Graph meta tags

### 4. Image Optimization
- [ ] Replace <img> with <NuxtImg> in WhyChooseUs.vue (3 images)
- [ ] Update alt text for all images in WhyChooseUs.vue
- [ ] Check and update images in Testimonials.vue
- [ ] Check and update images in FeatureCards.vue
- [ ] Check and update images in BuildingSection.vue
- [ ] Ensure alt text for logo in index.vue

### 5. Accessibility Basics
- [ ] Add ARIA labels where needed
- [ ] Ensure color contrast (check CSS)

### 6. Testing
- [ ] Run Lighthouse audit
- [ ] Verify no broken images or functionality
