const { myTable } = tables;
import { Kafka, CompressionTypes, logLevel } from 'kafkajs';

const KAFKA_HOST = 'kafka.server.com:9092';
const KAFKA_TOPIC = 'topic-test';
const KAFKA_CLIENTID = 'harperdb-producer';
const KAFKA_LOGLEVEL = logLevel.DEBUG;

const kafka = new Kafka({
	logLevel: KAFKA_LOGLEVEL,
	brokers: [KAFKA_HOST],
	clientId: KAFKA_CLIENTID,
})

const producer = kafka.producer();

const sendMessage = (event) => {
	return producer
	.send({
		topic: KAFKA_TOPIC,
		compression: CompressionTypes.GZIP,
		messages: [event],
	})
	.then(console.log)
	.catch(e => console.error(`[example/producer] ${e.message}`, e))
}

const init = async () => {
	await producer.connect();

	let events = await myTable.subscribe({ omitCurrent: true });
	for await (let event of events) {
		sendMessage(event)
	}
}

if (server.workerIndex === 0) {
	init();
}
