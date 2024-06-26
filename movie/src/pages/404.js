import Head from "next/head";

function Error(){
    return(
        <div>
            <Head> <title>Error</title></Head>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-page text-center">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className="display-1">Error</h1>
                            <p class="lead">Sorry, we couldn't find the page you are looking for.</p>
                            <p>Please go back to the previous page or return to the homepage.</p>
                            <br/>
                            <a class="btn btn-danger btn-md" href="./" role="button">Return to HomePage</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Error;