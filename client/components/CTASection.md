# CTASection Component - Enhanced UI

Komponen reusable Call-to-Action yang telah ditingkatkan dengan UI modern dan interaktif untuk berbagai halaman dengan kustomisasi yang fleksibel.

## 🆕 New Features & Improvements

### ✨ **Enhanced Visual Design**

- **Multiple Background Themes**: Gradient, solid, dan glassmorphism effects
- **Advanced Animations**: Floating elements, rotating decorations, breathing effects
- **Better Typography**: Improved font sizing dan spacing
- **Enhanced Shadows**: Multi-layered shadow system
- **Trust Indicators**: Built-in social proof elements

### 🎯 **Interactive Elements**

- **Button Shine Effects**: Hover animations dengan light sweep
- **Enhanced Hover States**: Improved button interactions
- **Smooth Transitions**: Better easing dan timing
- **Micro-interactions**: Icon rotations dan scale effects

## Props

| Prop                | Type   | Required | Default          | Description                            |
| ------------------- | ------ | -------- | ---------------- | -------------------------------------- |
| `title`             | string | ✅       | -                | Judul utama CTA section                |
| `description`       | string | ✅       | -                | Deskripsi/subtitle CTA section         |
| `primaryButton`     | object | ✅       | -                | Konfigurasi tombol utama               |
| `secondaryButton`   | object | ❌       | undefined        | Konfigurasi tombol sekunder (opsional) |
| `backgroundColor`   | string | ❌       | "#3671E9"        | Warna background section               |
| `containerVariants` | object | ❌       | default variants | Animation variants untuk container     |
| `itemVariants`      | object | ❌       | default variants | Animation variants untuk item          |
| `className`         | string | ❌       | ""               | CSS classes tambahan                   |

## Button Props

### Primary Button & Secondary Button

```typescript
{
  text: string;         // Text yang ditampilkan di button
  onClick?: () => void; // Fungsi yang dipanggil saat button diklik
  href?: string;        // Link tujuan (akan render sebagai <a> tag)
}
```

## Contoh Penggunaan

### 1. Basic Usage

```tsx
<CTASection
  title="Ready to get started?"
  description="Join thousands of users worldwide."
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log("Button clicked"),
  }}
/>
```

### 2. With Secondary Button

```tsx
<CTASection
  title="Ready to start your crypto journey?"
  description="Join millions of users who trust our platform."
  primaryButton={{
    text: "Get Started",
    onClick: () => handleGetStarted(),
  }}
  secondaryButton={{
    text: "Learn More",
    href: "/learn",
  }}
/>
```

### 3. Custom Background Color

```tsx
<CTASection
  title="Special Offer"
  description="Limited time offer for new users."
  primaryButton={{
    text: "Claim Now",
    onClick: () => handleClaim(),
  }}
  backgroundColor="#FF6B6B"
/>
```

### 4. With Custom Animations

```tsx
const customContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

<CTASection
  title="Custom Animation"
  description="CTA with custom animation variants."
  primaryButton={{
    text: "Try It",
    onClick: () => handleTry(),
  }}
  containerVariants={customContainerVariants}
/>;
```

### 5. With Additional CSS Classes

```tsx
<CTASection
  title="Styled CTA"
  description="CTA with additional styling."
  primaryButton={{
    text: "Start Now",
    onClick: () => handleStart(),
  }}
  className="mt-20 mb-10 max-w-4xl mx-auto"
/>
```

## Implementasi di Pages

### Products Page

```tsx
<CTASection
  title="Ready to start your crypto journey?"
  description="Join millions of users who trust CRAPPO for their cryptocurrency trading and investment needs."
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log("Get Started clicked"),
  }}
  secondaryButton={{
    text: "Learn More",
    onClick: () => console.log("Learn More clicked"),
  }}
  containerVariants={containerVariants}
  itemVariants={itemVariants}
/>
```

### Features Page

```tsx
<CTASection
  title="Ready to Experience These Features?"
  description="Join thousands of traders who trust our platform for their cryptocurrency trading needs."
  primaryButton={{
    text: "Get Started Now",
    onClick: () => console.log("Get Started clicked"),
  }}
  secondaryButton={{
    text: "Back to Home",
    href: "/",
  }}
  containerVariants={containerVariants}
  itemVariants={itemVariants}
  className="max-w-[1440px] mx-auto px-6 lg:px-[120px]"
/>
```

## Features

✅ **Fully Responsive** - Menggunakan Tailwind CSS responsive classes
✅ **Customizable Colors** - Background color dapat diubah via props
✅ **Flexible Buttons** - Support untuk onClick handler dan href links
✅ **Animation Ready** - Terintegrasi dengan Framer Motion
✅ **Optional Secondary Button** - Button kedua bersifat opsional
✅ **TypeScript Support** - Fully typed dengan interface
✅ **Consistent Design** - Mengikuti design system aplikasi

## Design Features

- **Background Decorations**: Animated rotating chart icon
- **Hover Effects**: Container lift effect saat hover
- **Button Animations**: Scale animation pada button interactions
- **Responsive Layout**: Stack vertical di mobile, horizontal di desktop
- **Consistent Typography**: Menggunakan font Rubik sesuai design system
