
import Button from "@/components/Button/Button";
import style from "./remark.module.css"

export default function Remark({ params }) {

  return (
    <div className="section-body"
      style={{ width: "100%", height: "100%" }}>
      <div className="container-fluid" style={{ height: "100%" }} >
        <div className="tab-content" style={{ height: "100%" }}>
          <div
            className="tab-pane fade show active d-flex flex-column"
            id="user-list"
            role="tabpanel"
            style={{ height: "100%" }}
          >
            <div className="card" style={{ height: "100%" }}>
              <div className="card-header" style={{ padding: ".5rem" }}>
                <h6>{`${params.jobid} - ${params.workerid}`}</h6>
              </div>

              <div className="card-body"
                style={{ padding: "0 0 .5rem 0", height: "100%", overflow: "auto" }}>

                <div className={style.remarkWrapper}>
                  <span>Remark</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nobis molestiae saepe repellat consequatur eaque ipsam magnam deleniti perspiciatis? Similique, harum? Temporibus perspiciatis, corrupti ut illum libero quasi accusamus ea repellendus enim dignissimos labore quaerat, dolore mollitia autem aliquid facere tempore perferendis adipisci velit quam accusantium rerum eligendi, aperiam sunt!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic totam, inventore repellendus, nostrum necessitatibus officia corrupti error architecto ab et quisquam. Impedit dolorem molestiae consequuntur obcaecati vitae alias suscipit non. Reiciendis exercitationem autem quod sed fuga deleniti, libero magnam consequatur voluptates repudiandae incidunt facilis dignissimos voluptatem vitae provident doloremque sunt dolore, explicabo expedita? Amet, ullam temporibus voluptatum maxime libero perferendis iure eum enim nihil, necessitatibus omnis laudantium. Labore, pariatur? Eveniet pariatur tempore optio culpa fuga reiciendis dignissimos laborum ipsa delectus id quo atque iusto nostrum, debitis expedita recusandae similique, aspernatur nisi quibusdam officia amet? Repellat rem corrupti quibusdam quis libero reiciendis sit maiores repellendus incidunt, laudantium quaerat ab cumque atque veniam earum expedita alias culpa praesentium aperiam aut aliquam assumenda ad, voluptatibus blanditiis? Aperiam nesciunt incidunt, sunt repellendus aut reprehenderit corporis! Deserunt temporibus ab est recusandae harum? Nesciunt dolore recusandae suscipit vitae expedita, veritatis minima porro praesentium rem ea provident, laboriosam ipsam sint cupiditate eos. Dolorum facere ullam obcaecati harum commodi, hic officia quas odio tempore sequi sint. Provident veritatis sed modi distinctio rem corporis vitae esse, delectus aliquid alias quis amet culpa, dolor temporibus blanditiis magni aperiam atque fugit! Officiis perferendis a inventore aliquid dolor accusamus, laborum non.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
