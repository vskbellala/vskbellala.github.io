# Day 17 - Queue

## FIFO (First in First Out)
- create via `import queue`
	- `q1 = queue.Queue(pa)`
		- pa defines how many to queue (blank = unlimited)
- add to the queue via `q1.put(value)`
- pop value from the queue via `q1.get()`
- `q1.empty()` returns if queue is empty
- `q1.unfinished_tasks` returns number of unfinished tasks in the queue
	- call `q1.task_done()` to declare a task as done and remove it from the unfinished tasks

## Priority Queue
- create via `import queue`
- `q1 = queue.PriorityQueue()`
- `q1.put((priority,'value'))`
	- will queue in order of first param priority
	- takes in tuples
- still can use `q1.empty()` and `q1.get()`


## Loggers
- means for tracking events that happen when some software runs
- specialized module for logging events
- 