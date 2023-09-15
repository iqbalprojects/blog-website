import Image from "next/image";
import ArrowLong from "./Icons/ArrowLong";
import Rectangle from "./Icons/Rectangle";

const AllPosts = () => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-2">
                <Rectangle />
                <h2 className="font-medium text-xl">New Posts</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
                <article className="bg-white p-2 rounded-lg">
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video rounded-lg mb-2"
                    />
                    <div className="text-black flex flex-col gap-y-1 text-start">
                        <p className="text-[#6941C6] text-xs font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm line-clamp-2">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                    </div>
                </article>
            </div>
            <button className="border border-white py-2 font-medium rounded-lg">
                LOAD MORE
            </button>
        </section>
    );
};

export default AllPosts;
