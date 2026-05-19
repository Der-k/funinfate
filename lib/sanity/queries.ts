export const homepageQuery = `
*[_type == "homepage"][0]{
  heroSection{
    slides[]{
      title,
      subtitle,
      description,
      videoUrl,
      ctaText,
      ctaLink
    },

    bottomCtaEyebrow,
    bottomCtaHeading,

    primaryCtaText,
    primaryCtaLink,

    secondaryCtaText,
    secondaryCtaLink
  },

  experienceSection{
    heading,

    cards[]{
      title,
      subtitle,
      category,

      slug{
        current
      },

      image{
        asset->{
          url
        }
      }
    }
  },

  discoverSection{
    heading,
    subheading,

    categories[]{
      title,

      cards[]{
        title,

        slug{
          current
        },

        image{
          asset->{
            url
          }
        }
      }
    }
  }
}
`;