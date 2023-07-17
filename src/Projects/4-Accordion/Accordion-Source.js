import data from './data';
import Question from './Question';

function QuestionList(){

    return <main>

        <div className="container">
            <h3>questions and answers about login</h3>
            <section className="info">
               {
                data.map((ele)=>{
                return <Question key={ele.id}{...ele}/>   
                })
                }

            </section>
        </div>
    </main>
}
export default QuestionList;