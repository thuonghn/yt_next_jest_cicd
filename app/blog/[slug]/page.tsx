type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export async function getStaticPaths() {
  // Fetch dynamic paths from your data source
  const paths = [
    { params: { slug: 'post-1' } },
    { params: { slug: 'post-2' } },
    // Add more paths as needed
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Params) {
  // Fetch data for the specific post using params.slug
  // Example: const postData = await fetchPostData(params.slug);
  
  // Return props with the post data
  return {
    props: {
      // Pass the post data to the page component
      // Example: postData,
    },
  };
}

export function generateStaticParams() {
  return [
    { params: { slug: 'post-1' } },
    { params: { slug: 'post-2' } },
    // Add more paths as needed
  ];
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
