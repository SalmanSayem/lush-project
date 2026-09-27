import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

const Blog = () => {
  return (
    <section className="pb-30">
      <div className="container">
        <SectionHeading heading={"Interesting blog to read"} />

        <div className="pt-8.75 grid grid-cols-3 gap-17.5">
          <BlogCard image={"Blog(1).png"} date={"January 20, 2023"}  heading={"More productive with an atmosphere of greenery"} decription={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..." }/>
          <BlogCard image={"Blog(2).png"} date={"January 10, 2023"}  heading={"The benefits of plants in your room"} decription={"Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...." }/>
          <BlogCard image={"Blog(3).png"} date={"January 15, 2023"}  heading={"Hobbyist plants in the house"} decription={"Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...." }/>
        </div>
      </div>
    </section>
  );
};

export default Blog;
