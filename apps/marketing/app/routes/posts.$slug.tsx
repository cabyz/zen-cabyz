import { type LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import posts from "../../content/posts/index.json" assert { type: "json" }; // This pattern depends on your build setup
// Actually Keystatic files are usually separate .json or .md files.
// Let's assume a standard pattern where we read the specific slug file.

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { slug } = params;
    // In a real build, we'd use a server-side read or a glob import.
    // For now, let's provide the structure.
    return { slug };
};

export default function Post() {
    const { slug } = useLoaderData<typeof loader>();

    return (
        <div className="min-h-screen bg-[#FBFBFD] py-20 px-4">
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto prose prose-blue lg:prose-xl"
            >
                <h1>Blog Post: {slug}</h1>
                <p className="text-[#86868B]">This is a placeholder for your Keystatic-driven blog post.</p>
                {/* Content would be rendered here using a Markdoc/Markdown renderer */}
            </motion.article>
        </div>
    );
}
