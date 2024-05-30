import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams(); // to track pages under block
  let redirect = useNavigate();

  return (
    <div className="bg-slate-600  h-screen">
      <div className="h-full border border-red-500">
        <h1 className="mt-40 text-white">Blog Details for page{id}</h1>
        <button
          className="w-20 rounded-xl bg-blue-600 text-white py-1 px-3 mt-5"
          onClick={() => redirect("/blog")}
        >
          Back
        </button>

        <p className="p-24 text-white  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          voluptates, sequi expedita inventore facilis delectus voluptate a
          dolores, temporibus culpa nesciunt soluta consectetur fugit corrupti
          molestiae exercitationem similique? Doloremque, ullam. Tenetur quod
          vitae voluptate iste eum voluptatibus tempora velit quam aliquam
          optio. Aut at doloremque odit a quidem, sed illo, repellat quos rerum
          totam ratione magnam ipsa dolores sequi enim. Consequatur laboriosam
          reprehenderit, fugit velit ipsum dolor a repellendus repudiandae
          corrupti iusto atque ab iste cum vitae esse totam soluta suscipit amet
          hic, eius obcaecati voluptas? Aliquid sequi quis minima? Dolor
          asperiores atque fuga impedit, voluptates quod nesciunt quos, deserunt
          mollitia quidem quo? Exercitationem quaerat neque magnam assumenda
          distinctio incidunt reiciendis, sit quod consequuntur, dolore eligendi
          aspernatur vero recusandae iusto. Nemo fugit rem iste quae, beatae
          eum! Aperiam, quae temporibus facere fugiat modi quas rerum a autem
          quo explicabo error incidunt ea deserunt vitae, in nihil nostrum eius.
          Maxime, perferendis.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
