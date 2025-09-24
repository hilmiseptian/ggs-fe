export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto pt-8">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Let's Get In Touch!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Company</label>
                <input type="text" className="input" placeholder="Company" />
                <label className="label">Message</label>
                <input type="text" className="input" placeholder="Message" />
                <button className="btn btn-neutral mt-4">Send</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
