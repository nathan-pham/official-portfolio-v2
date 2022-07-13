import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContent, H, P } from "@/components/styles";

import tools from "@/data/tools";
import Tool from "@/components/Tool";
import Twemoji from "@/components/Twemoji";

const Tools = () => {
    return (
        <>
            <Header />
            <PageContent>
                <H $as="h2">Tools</H>
                <P className="mt-3">
                    I use this list of apps and technolgies daily to learn new
                    skills and finish projects. I added links for each one if
                    want to explore <Twemoji emoji="😄" />.
                </P>
                <div className="mt-6">
                    {tools.map((tool, i) => (
                        <Tool
                            key={tool.name}
                            {...tool}
                            lastChild={i == tools.length - 1}
                        />
                    ))}
                </div>
                <Footer />
            </PageContent>
        </>
    );
};

export default Tools;
