const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://s23051:12345678!a@cluster0.ktx4d.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("접속");

        const collection = client.db('test').collection('person');

        await collection.insertOne({name : 'kdh', age : 30});
        console.log('문서 추가');

        const documents = await collection.find({name : 'kdh'}).toArray();
        console.log("찾은 문서", documents);

        await collection.updateOne({name:'kdh'},{$set: {age : 31}});
        console.log("문서 업뎃");

        const updatedDocuments = await collection.find({name:'kdh'}).toArray();
        console.log("갱신된 문서 : ", updatedDocuments);

        await client.close();
    } catch(err) {
        console.error(err);
    }
}

main();