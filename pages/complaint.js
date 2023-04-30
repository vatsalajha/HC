const Complaint = () => (
  <form className="bg-gray-100 flex flex-col justify-center items-center">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Name" />
    </div>
    <div>
      <label>Voice Note</label>
      <input type="text" placeholder="Voice Note" />
    </div>
    <div>
      <label>Photo</label>
      <input type="text" placeholder="Photo" />
    </div>
    <div>
      <label>Video</label>
      <input type="text" placeholder="Video" />
    </div>
  </form>
);

export default Complaint;
