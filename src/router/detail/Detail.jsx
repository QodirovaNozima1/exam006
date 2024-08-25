import React, { memo } from "react";
import { IoIosGitCompare } from "react-icons/io";
import { useFetch } from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";
import { GoChevronUp } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import "./Detail.scss"
const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/product/${id}`, {}, [id]);
  console.log(data);

  return (
    <div className="container mx-auto  ">
      <div className="flex gap-28 detail items-center mt-11 justify-center">
        <div className="flex  flex-col">
          <div className="border rounded-xl w-[529px] ml-24 detail__img">
            <img  className='w-full 'src={data?.images[0]} alt="" />
          </div>
          <div className="flex items-center gap-4 justify-center">
            {data?.images?.map((el, inx) => (
              <div className="rounded-lg bg-slate-200 object-contain w-32 h-32" key={inx}>
                <img src={el} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-col">
          <button className="bg-red-200 p-1 rounded font-bold text-red-400">Sale off </button>
          <b className="text-4xl">{data?.title}</b>
          <div className="flex">
            <LiaStarSolid className="text-yellow-300" />
            <p>(32 reviews)</p>
          </div>
          <div className="flex gap-3">
            <div className="text-6xl">${data?.price}</div>
            <div className="flex flex-col">
              <p className="text-yellow-400">24% off</p>
              <b><del className="text-2xl text-gray-400">$52</del> </b>
            </div>
          </div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="flex items-center justify-center gap-2">
            <p>Size / Weight:</p>
            <p className="p-4 rounded-md bg-slate-100">
              {data?.dimensions?.depth} depth
            </p>
            <p className="p-4 rounded-md bg-slate-100">
              {data?.dimensions?.height} height
            </p>
            <p className="p-4 rounded-md bg-slate-100">
              {data?.dimensions?.width} width
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="flex items-center justify-center rounded-lg w-24 h-12 gap-3 p-3 border">
              <p>1</p>
              <div>
                <GoChevronUp className="text-green-400" />
                <GoChevronDown className="text-green-400" />
              </div>
            </div>
            <button className="bg-green-400 flex items-center rounded-lg w-72 h-12 justify-center p-5 text-white">
              <IoCartOutline />
              add to cart
            </button>
            <div className="p-3 border flex items-center rounded-lg justify-center text-3xl">
              <CiHeart />
            </div>
            <div className="p-3 border flex items-center rounded-lg justify-center  text-3xl">
              <IoIosGitCompare c />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 gap-5 detail__text">
        <div className="flex gap-2">
          <button className="px-3 py-1 hover:shadow-md transition-all rounded-3xl border hover:text-green-400">
            Description
          </button>
          <button className="px-3 py-1 hover:shadow-md transition-all rounded-3xl border hover:text-green-400">
            Additional info
          </button>
          <button className="px-3 py-1 hover:shadow-md transition-all rounded-3xl border hover:text-green-400">
            Vendor
          </button>
          <button className="px-3 py-1 hover:shadow-md transition-all rounded-3xl border hover:text-green-400">
            Reviews (3)
          </button>
        </div>
        <div>
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Spluttered narrowly yikes left moth in yikes bowed this
            that grizzly much hello on spoon-fed that alas rethought much
            decently richly and wow against the frequent fluidly at formidable
            acceptably flapped besides and much circa far over the bucolically
            hey precarious goldfinch mastodon goodness gnashed a jellyfish and
            one however because.
          </p>
        </div>
        <div className="flex gap-8 pb-8 border-b">
          <div className="flex flex-col gap-3">
            <p className="">Type Of Packing</p>
            <p className="">Color</p>
            <p className="">Quantity Per Case</p>
            <p className="">Ethyl Alcohol</p>
            <p className="">Piece In One</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Bottle</p>
            <p>Green, Pink, Powder Blue, Purple</p>
            <p>100ml</p>
            <p>70%</p>
            <p>Carton</p>
          </div>
        </div>
        <p>
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <b>Packaging & Delivery</b>
        <hr />
        <p>
          Less lion goodness that euphemistically robin expeditiously bluebird
          smugly scratched far while thus cackled sheepishly rigid after due one
          assenting regarding censorious while occasional or this more crane
          went more as this less much amid overhung anathematic because much
          held one exuberantly sheep goodness so where rat wry well
          concomitantly.Scallop or far crud plain remarkably far by thus far
          iguana lewd precociously and and less rattlesnake contrary caustic wow
          this near alas and next and pled the yikes articulate about as less
          cackled dalmatian in much less well jeering for the thanks blindly
          sentimental whimpered less across objectively fanciful grimaced wildly
          some wow and rose jeepers outgrew lugubrious luridly irrationally
          attractively dachshund.
        </p>
        <b>Suggested Use</b>
        <p>Refrigeration not necessary.</p>
        <p>Stir before serving</p>
        <b>Other Ingredients</b>
        <p>Organic raw pecans, organic raw cashews.</p>
        <p>
          This butter was produced using a LTG (Low Temperature Grinding)
          process
        </p>
        <p>
          Made in machinery that processes tree nuts but does not process
          peanuts, gluten, dairy or soy
        </p>
        <b>Warnings</b>
        <p>Oil separation occurs naturally. May contain pieces of shell.</p>
      </div>
    </div>
  );
};

export default memo(Detail)