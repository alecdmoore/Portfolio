import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { BsMap } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const handleEmail = () => {
    alert("clicked email");
    // mailto:youremail@domain.tld?subject=feedback
    // navigate("mailto:youremail@domain.tld?subject=feedback");
  };

  return (
    <section id="contact" className="contact py-14 md:py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT </span> ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5 md:py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-start"
        >
          <div className="flex flex-col  space-y-8">
            <div className="justify-start flex flex-row  space-x-4 xs:space-x-8">
              <div className="flex bg-grey rounded-full p-7 justify-center">
                <BsMap className="xs:hidden" size={30} color="#2CBCE9" />
                <BsMap className="hidden xs:block" size={50} color="#2CBCE9" />
              </div>
              <div className="md:flex md:flex-col pt-5">
                <h1 className="text-lg md:text-2xl font-bold">Location:</h1>
                <p className="text-lg md:text-2xl pt-2">San Jose, CA</p>
              </div>
            </div>
            <div
              className="justify-start flex flex-row space-x-4 xs:space-x-8 hover:cursor-pointer"
              onClick={handleEmail}
            >
              <div className="flex bg-grey rounded-full p-7 justify-center">
                <AiOutlineMail
                  className="xs:hidden"
                  size={30}
                  color="#2CBCE9"
                />
                <AiOutlineMail
                  className="hidden xs:block"
                  size={50}
                  color="#2CBCE9"
                />
              </div>
              <div className="md:flex md:flex-col pt-5">
                <h1 className="text-lg md:text-2xl font-bold">Email:</h1>
                <p className="text-lg md:text-2xl pt-2 whitespace-normal">
                  alecdmoore@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/49cba2fad11370973737fc25c63cb3fd"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
