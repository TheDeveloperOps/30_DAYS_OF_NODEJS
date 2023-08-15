# Day 15
# Streams

- Streams are used to handle streaming data in node.js
- Streams can be readable , writable or both.
- All streams are instances of `eventEmitter` class.
- We can use the `stream` module via requiring it in the following way: 

`var stream = require('streams')`

## Types of Streams 

1. Readable Streams : The streams which is used to perform read operation are readable streams. 

2. Writable Streams : The streams which is used to perform write operations are writable streams 

3. Duplex Streams : Duplex Streams are the streams which implements both readable and writable stream.

4. Transform stream: Transform streams are duplex streams that can transform or modify data as it is read and written.

## READABLE STREAMS 
**The streams which is used to perform read operation are readable streams.**

- Modes: There are two modes of readables.

1. `paused`:
- If the readable is in paused mode, then we need to call stream.read() explicitly to read the chunks of data.
- By default, all readable streams are in paused mode.
- We can switch readable to pause mode by calling stream.pause() method when there are no pipe destinations
- We can also call stream.unpipe() method when pipe destinations are available , in order to switch readable to pause mode.

2. `flowing`:

- If the readable is in flowing mode, then the data is successfully emitted.
- We can switch the readable stream to flowing mode by calling stream.resume() method.
- We can switch the readable stream to flowing mode by calling stream.pipe() method.
- If the readable is in flowing mode and there is no consumer to handle the data then it can lead to data loss.


3.  `examples`: 
- HTTP requests ( Server )
- HTTP responses ( Client )
- fs module read streams
- zlib module
- crypto module
- TCP sockets
- process.stdin

## EVENTS 

- readable : This event is fired when there is data available to be read from the stream.
- data : This event is fired when the stream is vacating the ownership of the chunk of data to the consumer.
- error : This event is fired when the stream is unable to generate data due to some internal error or when stream tries to push invalid chunk of data.
- close : This event is fired when the stream is closed. It indicates that no more events will be emitted and no further computation will occur.
- end : This event is fired when all the data is read. It indicates that there is no more data to be consumed.

## METHODS 

1. readable.pause() : This method is used to change the mode of the stream from flowing to paused and also all the data availble keeps residing in the internal buffer.
readable.resume() : This method is used to change the mode of the stream from paused to flowing and also stream will resume emitting events.
2. readable.isPaused() : This method is used to check the current operating state of the readable stream. If it returns true then that signifies that readable stream is in paused mode.
3. readable.pipe() : This method is used to attach a writable stream to the readable which will make the stream switch to flowing mode and start pushing data to the attached writable.
4. readable.unpipe() : This method is used to detach the writable stream previously attached to the readable stream.
5. readable.read() : This method is used to pull the data out of the internal buffer where data is returned in the form of buffers unless any other format is specified using readable.
6. setEncoding() . If there is no data to pull , then null is returned.
7. readable.setEncoding() : This method is used to set the encoding for readable stream. By default the data is pulled in the form of buffers.
8. readable.unshift() : This method is used to push the data back to the internal buffer.
9. readable.wrap() : This method is used to read the data from the readables where the data sources uses the old streams.
10. readable.destroy() : This method is used to signifies the end of readable stream and stream releases any resources , if held.

## WRITABLE STREAMS 
*The streams which is used to perform write operations are writable streams.*

*examples*
- HTTP requests ( Client )
- HTTP responses ( Server )
- fs module write streams
- zlib module
- crypto module
- TCP sockets
- process.stdout
- process.stderr

## events:

- drain : This event is fired when a call to system.write(chunk) method returns false and it indicates when it will be appropriate to resume writing data.
- pipe : This event is fired when stream.pipe() method is called on a readable stream indicating the addition of the writable in the set of destinations of the readable.
- unpipe : This event is fired when stream.unpipe() method is called on a readable stream indicating the removal of the writable from the set of destinations of the readable.
- error : This event is fired when an error occured while writing or piping the data.
- close : This event is fired when the stream is closed. It indicates that no more events will be emitted and no further computation will occur.
- finish : This event is fired when all the data is successfully flushed.

## Methods

- writable.cork() : This method is used to force all the written data to be buffered in memory. This buffered data is flushed in either of the following scenarios :
- stream.uncork() method is called.
- stream.end() method is called.
- writable.uncork() : This method is used to flush all the data buffered by stream.cork() method.
- writable.write() : This method is used to write some data to the stream and call the given callback when the data is handled successfully.
- writable.setDefaultEncoding() : This method is used to set the default encoding for the writable stream.
- writable.end() : This method is used to signifies that no more data will be written to the writable stream.
- writable.destroy() : This method is used to signifies the end of writable stream.

## Duplex stream
**Duplex streams are the streams which implements both readable and writable streams simultaneously.Most common example of duplex stream include net.socket class of net module. A better explanation of how duplex streams works is as follows :**
**Suppose we build a socket in node.js to implement simultaneously, then that can be achieved using duplex stream. We will be having two independent channels in the network where one channel is used for transmitting data and other for receiving data.**


## EXAMPLE 

*Index.js*
```
const { error } = require('console');
var fs = require('fs')
var wdata = "This is the data that gonna be updated on to the file"

var myWriteStream = fs.createWriteStream('aboutMe.txt')

myWriteStream.write(wdata)

myWriteStream.end();
myWriteStream.on('error',(error)=>{
    console.log(error)
})

myWriteStream.on('finish',()=>{
    console.log("Data written successfully using streams")
    console.log("Trying to read the data using read streams")

    var myReadStream = fs. createReadStream('aboutMe.txt')

    var rContent=''
    myReadStream.on('data',(chunk)=>{
        rContent += chunk
    })
    myReadStream.on('error', function(err){
		console.log(err);
	});
	myReadStream.on('end',function(){
		console.log('read: ' + rContent);
	});
	console.log('performed write and read using streams');
})

```

*OUTPUT*
![Alt text](image.png)
