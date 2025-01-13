interface CategoryProps {
  params: Promise<{
    categories: string[]
  }>,
  searchParams?: Promise<string>
}

export default async function Category(props: CategoryProps) {
  const { categories } = await props.params
  return (
    <h1>Category: {categories} </h1>
  )
}