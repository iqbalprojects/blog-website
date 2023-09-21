import Image from "next/image";
import ArrowLong from "./Icons/ArrowLong";
import Rectangle from "./Icons/Rectangle";

const AllPosts = ({ posts }) => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-2">
                <Rectangle />
                <h2 className="font-medium text-xl">New Posts</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {posts.map((post) => (
                    <article className="bg-white p-2 rounded-lg">
                        <Image
                            src={
                                post.image_url
                                    ? "https://s2fb.lezenda.com/storage/" +
                                      post.image_url
                                    : "/images/no_image.jpeg"
                            }
                            width={300}
                            height={300}
                            quality={50}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            priority
                            alt="Picture of the author"
                            className={`${
                                post.image_url
                                    ? "object-cover"
                                    : "object-contain scale-75"
                            } aspect-video rounded-lg mb-2`}
                        />
                        <div className="text-black flex flex-col gap-y-1 text-start">
                            <p className="text-[#6941C6] text-xs font-medium">
                                {new Date(post.published_at).toLocaleDateString(
                                    "EN",
                                    {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    }
                                )}
                            </p>
                            <div className="flex items-center gap-x-3 justify-between">
                                <p className="font-semibold text-sm line-clamp-2">
                                    {post.title}
                                </p>
                                <ArrowLong className="shrink-0 h-2" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <button className="border border-black tracking-wide py-2 font-medium rounded-lg">
                LOAD MORE
            </button>
        </section>
    );
};

export default AllPosts;
