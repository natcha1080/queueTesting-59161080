class Queue {
  constructor(sizeMax) {
    this.max = sizeMax;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
    this.data = new Array(sizeMax);
  }
// output: list ว่างจะ return true, ถ้ามีข้อมูลจะ return false
  empty() {
    return this.size == 0;
  }
// output: เมื่อเต็มจะ return true, ถ้าไม่เต็มจะ return false
  full() {
    return this.size == this.data.length;
  }
// input: x : ข้อมูลใด ๆ
// output:  ถ้า list เต็มจะ return false [เพิ่มไม่ได้], ถ้า list ว่าง จะเพิ่มได้ return true
  enqueue(x) {
    if(this.size == this.max) {
      return false;
    }
    this.data[this.tail] = x;
    this.size++;
    this.tail++;
    return true;
  }
// output:  ถ้า list มีข้อมูลจะ return ข้อมูล , ถ้า list ว่างจะ return null
  dequeue() {
    if(this.size == 0) {
      return null;
    }
    const x = this.data[this.head];
    this.size--;
    this.head++;
    this.tail--;

    if(this.head == this.max) {
      this.head = 0;
    }
    return x;
  }
}
module.exports = Queue;