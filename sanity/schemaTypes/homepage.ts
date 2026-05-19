export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",

  fields: [
    // HERO SECTION
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",

      fields: [
        {
          name: "slides",
          title: "Hero Slides",
          type: "array",

          of: [
            {
              type: "object",

              fields: [
                {
                  name: "title",
                  title: "Main Title",
                  type: "string",

                  validation: (Rule: any) => Rule.required(),
                },

                {
                  name: "subtitle",
                  title: "Subtitle",
                  type: "string",
                },

                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 4,
                },

                {
                  name: "videoUrl",
                  title: "Background Video URL",
                  type: "url",

                  validation: (Rule: any) => Rule.required(),
                },

                {
                  name: "ctaText",
                  title: "Slide CTA Text",
                  type: "string",

                  initialValue: "Get Your Ticket",
                },

                {
                  name: "ctaLink",
                  title: "Slide CTA Link",
                  type: "string",

                  initialValue: "/tickets",
                },
              ],

              preview: {
                select: {
                  title: "title",
                  subtitle: "subtitle",
                },

                prepare(selection: any) {
                  return {
                    title: selection.title,
                    subtitle: selection.subtitle,
                  };
                },
              },
            },
          ],
        },

        {
          name: "bottomCtaEyebrow",
          title: "Bottom CTA Eyebrow",
          type: "string",

          initialValue: "Join Africa’s Future of Innovation",
        },

        {
          name: "bottomCtaHeading",
          title: "Bottom CTA Heading",
          type: "string",

          initialValue:
            "Experience the ideas, people, and technology shaping tomorrow.",
        },

        {
          name: "primaryCtaText",
          title: "Primary CTA Text",
          type: "string",

          initialValue: "Reserve Your Spot",
        },

        {
          name: "primaryCtaLink",
          title: "Primary CTA Link",
          type: "string",

          initialValue: "/tickets",
        },

        {
          name: "secondaryCtaText",
          title: "Secondary CTA Text",
          type: "string",

          initialValue: "Explore Funinfate",
        },

        {
          name: "secondaryCtaLink",
          title: "Secondary CTA Link",
          type: "string",

          initialValue: "/about",
        },
      ],
    },

    // EXPERIENCE SECTION
    {
      name: "experienceSection",
      title: "Experience Section",
      type: "object",

      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },

        {
          name: "cards",
          title: "Cards",
          type: "array",

          of: [
            {
              type: "object",

              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },

                {
                  name: "subtitle",
                  title: "Subtitle",
                  type: "text",
                },

                {
                  name: "category",
                  title: "Category",
                  type: "string",
                },

                {
                  name: "slug",
                  title: "Slug",
                  type: "slug",

                  options: {
                    source: "title",
                  },
                },

                {
                  name: "image",
                  title: "Image",
                  type: "image",

                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // DISCOVER SECTION
    {
      name: "discoverSection",
      title: "Discover Section",
      type: "object",

      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },

        {
          name: "subheading",
          title: "Subheading",
          type: "text",
        },

        {
          name: "categories",
          title: "Categories",
          type: "array",

          of: [
            {
              type: "object",

              fields: [
                {
                  name: "title",
                  title: "Category Title",
                  type: "string",
                },

                {
                  name: "cards",
                  title: "Cards",
                  type: "array",

                  of: [
                    {
                      type: "object",

                      fields: [
                        {
                          name: "title",
                          title: "Title",
                          type: "string",
                        },

                        {
                          name: "image",
                          title: "Image",
                          type: "image",

                          options: {
                            hotspot: true,
                          },
                        },

                        {
                          name: "slug",
                          title: "Slug",
                          type: "slug",

                          options: {
                            source: "title",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};