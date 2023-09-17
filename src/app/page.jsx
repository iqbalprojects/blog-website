import PopularPosts from "@/components/PopularPosts";
import AllPosts from "@/components/AllPosts";
import Carousel from "@/components/Carousel";

export default async function Home() {
    const { banners } = await fetch(
        "https://s2fb.lezenda.com/api/v1/foodmaniasg.com/banners/"
    ).then((response) => response.json());

    const { posts } = await fetch(
        "https://s2fb.lezenda.com/api/v1/lezenda.com/posts/"
    ).then((response) => response.json());
    return (
        <>
            <Carousel banners={banners.hero_slider} />
            <main className="px-4 my-10">
                <div className="container mx-auto flex flex-col gap-y-10">
                    <PopularPosts />
                    <AllPosts posts={posts.data} />
                </div>
            </main>
        </>
    );
}
