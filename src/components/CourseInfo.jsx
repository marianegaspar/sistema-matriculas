import Card from "./Card";
import Header from "./Header";
import CardWithList from "./CardWithList";
import CardWithBullet from "./CardWithBullet";
import CardWithPrice from "./CardWithPrice";
import CardWithClasses from "./CardWithClasses";

function CourseInfo({ course }) {
  return (
    <>
      <Header />
  <main className="course-info mt-24">    
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
                  {course.name}
                </h1>
                <p className="mt-1 text-base text-text-secondary-light dark:text-text-secondary-dark">
                  Professor: {course.teacher}
                </p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                <button className="flex shrink-0 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-105">
                  <span>Matricular-se</span>
                </button>                
              </div>              
            </div>             
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-8 md:col-span-2">
                <CardWithList
                  title={"Detalhes do Curso"}
                  listItems={course.whyimportant}
                />
                <Card title={"Ementa"} description={course.description} />
                <Card
                  title={"Pré-requisitos"}
                  description={course.requisites}
                />
                <CardWithBullet
                  title={"Para quem é este curso?"}
                  bulletPoints={course.whoisfor}                
                />                
              </div>             
             <div className="space-y-8">
                <CardWithPrice priceItem={course.price} />
                <CardWithClasses schedule={course.schedule} />
                  <CardWithBullet
                  title={"Material de Apoio"}
                  bulletPoints={course.material}               
                /> 
            </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default CourseInfo;
