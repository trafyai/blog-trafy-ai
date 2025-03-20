'use client'
import '@styles/research/ResearchPage.css';
import BlogHero from "./research/BlogHero";
import BlogIntroduction from "./research/BlogIntroduction";
import ResearchArticle from "./research/ResearchArticle";
import BlogConclusion from "./research/BlogConclusion";
import BlogNewsletter from './research/BlogNewsletter';

export default function BlogPage(props) {


  return (
    <div className="blog-page">
      <div className="blog-page-container" >
        <div className="blog-page-top-section-contents">
            <div className="blog-page-top-section-blog-contents">
              <BlogHero {...props} />
              <BlogIntroduction {...props} />
              <ResearchArticle {...props}/>
              <BlogConclusion {...props} />
              <BlogNewsletter/>
            </div>
        </div>


      </div>
    </div>
  );
}
