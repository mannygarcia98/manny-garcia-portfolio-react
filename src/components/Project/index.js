import React from "react";
// import runbuddy from "../../assets/images";

function Project() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 order-md-2 d-flex justify-content-center">
          <img src={require("../../assets/images/run-buddy_cropped.jpg")} alt="" class="project w-md-30 extra-rounded" />
        </div>
        <div class="col-12 order-md-1 text-center">
          <h2 class="fs-1">Run Buddy</h2>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, labore eaque assumenda asperiores itaque voluptatem nemo aperiam accusamus architecto. Molestiae, veritatis. Exercitationem quos nihil architecto obcaecati saepe modi dolorem quidem ut deleniti harum repellat dolor atque
            consequuntur, reiciendis cumque assumenda.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Project;
