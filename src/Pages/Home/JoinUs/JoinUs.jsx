import emailjs from 'emailjs-com'
import { useRef } from 'react';
const JoinUs = () => {
    const form = useRef();

    const sentEamil = e => {
        e.preventDefault();

        emailjs.sendForm('service_s5pvxlv', 'template_gl2yru8', form.current, '95PCiQqf5ilMOkvw9')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className=" bg-black p-20">
            <h1 className=' mb-16 text-center text-5xl text-sky-400 font-bold font-mono'>Contuct Us</h1>
            <form className='  w-80 m-auto flex flex-col gap-7' ref={form} onSubmit={sentEamil}>
                <input className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' type="text" name="name" placeholder='Name' />

                <input className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' type="email" name="email" placeholder='Email' />

                <textarea className=' text-sky-500 bg-black border border-t-none border-b-4  ps-4 border-sky-500' placeholder='Write your message' name="message" id="" cols="" rows=""></textarea>
                <input className=' text-lg font-bold hover:bg-black text-sky-500 w-52 border border-b-4 border-sky-400 m-auto py-2 borde bg-slate-800' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default JoinUs;