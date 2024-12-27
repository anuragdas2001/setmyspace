const Testimonial = () => {
    return (
      <div className="p-4">
        <h1 className="text-center text-4xl font-bold p-10">
          What Our Customers Are Saying
        </h1>
        <div className="bg-white rounded-lg p-8 flex items-stretch h-full">
          <div className="flex-1 p-8">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              assumenda consectetur sed voluptas atque voluptatem architecto dolor
              doloribus voluptatibus id qui nulla, illo nostrum magnam repellendus
              mollitia commodi. Illo tempora et corrupti voluptates cum eveniet
              dicta ex deserunt aspernatur? Quas.
            </p>
            <div className="flex items-center space-x-4 mt-10">
              {/* Image */}
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://s3-alpha-sig.figma.com/img/07ab/4741/9a342a21966704a62ef5ac3f6f8e7829?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KL7svTiI~stqb~lvIcfFfm9OGjVyW-ZrPp2NNobO9rJPlBVnMK-NxCN52m0KXKybBxvEoeywEyGg6hgpLC6~OL~7tsX6HGkOqgXLPoGObSDeQ-Um2NoIJNkZGWUjmx~JAJ~rXEoGI69Nf~OhsE-IoZZ-B4-5z514Z63q2NBY8XitN~uHOYVQCQbTkx3F8T4g5Ys~OPazEJtYhz50a4kVhLOa9EYuZ-LWfudfBYn95UmbSUu6Sa21z8ceKTrxx-bjzEJAU-4AtSN-AqAlg~5B3NcvOKTfGP97L1aWR~2aikxZ9CvxfzBXTf~as9ZOo-0zxhKjktAMo3epjetg50n8SA__"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Name and Designation */}
              <div>
                <h1 className="text-md text-[#DE3163]">Joseph Rodriguez</h1>
                <p className="text-sm text-gray-500">CEO of Reform</p>
              </div>
            </div>
          </div>
  
          {/* Vertical line */}
          <div className="border-l p-10 border-slate-200 h-full mx-4"></div>
  
          <div className="flex-1 p-8">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              assumenda consectetur sed voluptas atque voluptatem architecto dolor
              doloribus voluptatibus id qui nulla, illo nostrum magnam repellendus
              mollitia commodi. Illo tempora et corrupti voluptates cum eveniet
              dicta ex deserunt aspernatur? Quas.
            </p>
            <div className="flex items-center space-x-4 mt-10">
              {/* Image */}
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0934/f101/7c18d7de1b0edc759d1d676df281d365?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKrhaToe5hIxAcPWoV50Ut9bNWkuA9IZPIkJUw9q3zqiayrWUK14jRTpESfHAf~K5YhVLAA12frY~Q9XawFrsVvA811WHkBkYmsCekQ8mh72h-TUjBtbBNRj8BUubbPdoCQvxoIlZsyUSK70IMC7cTtMpvbvwMzDR5TNCawm3uDD-JU83iKDQyLDWODx~wqDKcdrhQZGNvW8cZ-k9-3GWfdW2MtPKxX5wlI4qrRisoECmqdDMVVPkECYESjgxFdvdPmOlg~jlZJNG-JHwopB1wrKhzkzN83pg9rh1UCOtA7~wWQLa2ZxkMr2V3ShU-ALChlE34LeI-HN1AgtxzxgZg__"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Name and Designation */}
              <div>
                <h1 className="text-md text-[#DE3163]">Joseph Rodriguez</h1>
                <p className="text-sm text-gray-500">CEO of Reform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  