/** Rewrite this nested callback mess as a clean promise chain (or async/await).

    ugly callback version — rewrite this   

    getData(id, function(err, user) {
      if (err) throw err;
      getPosts(user.id, function(err, posts) {
        if (err) throw err;
        console.log(posts);
      });
    });

 */


    function getData(user = {id: 1234, name: "Joe", role: "admin"}){
        return new Promise((res) => {
            setTimeout(() => { 
                res({
                    user,
                    msg: console.log("USER DATA:", user)
                });

            }, 500)
        })
    }

    function getPost(userID, user){
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    res: true,
                    msg: console.log("FOUND A POST FROM USER ID:", userID)
                })
            }, 500)
        })
    }



    async function getUserData(){
        const { user } = await getData();
        const results = await getPost(user.id);
    }

    getUserData();



