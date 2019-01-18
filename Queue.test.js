// 0. import Queue มาใช้ ใน test
const Queue = require('./Queue');
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
test('สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)', () => {
    const queue = new Queue();
    expect(queue.empty()).toBe(true);
});

// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
test('สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20', () => {
    const queue = new Queue(1);
    expect(queue.enqueue(20)).toBe(true); 
    expect(queue.dequeue(20)).toBe(20);
});

// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
test('สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)', () => {
    const queue = new Queue(1);
    expect(queue.enqueue(1)).toBe(queue.full(true));
});

// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
test('สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)', () => {
    const queue = new Queue(1);
    expect(queue.enqueue(3)).toBe(true);
    expect(queue.enqueue(5)).toBe(false);
});

// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
test('สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน', () => {
    const queue = new Queue(2);
    expect(queue.enqueue(1)).toBe(true);
    expect(queue.enqueue(2)).toBe(true);
    expect(queue.dequeue(1)).toBe(1);
    expect(queue.dequeue(2)).toBe(2);
});

// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null
test('สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null', () => {
    const queue = new Queue(1);
    expect(queue.dequeue()).toBe(null);
});

// 7. Bug tail
test('Bug  ตรง dequeue() ไม่มี this.tail--; สร้าง queue size 5 เพิ่มเข้าไป 5 ตัว ดึงออก 4 ตัว tail จะเหลือ 1', () => {
    const queue = new Queue(5);
    expect(queue.enqueue(1)).toBe(true);
    expect(queue.enqueue(2)).toBe(true);
    expect(queue.enqueue(3)).toBe(true);
    expect(queue.enqueue(4)).toBe(true);
    expect(queue.enqueue(5)).toBe(true);
   
    expect(queue.dequeue(1)).toBe(1);
    expect(queue.dequeue(2)).toBe(2);
    expect(queue.dequeue(3)).toBe(3);
    expect(queue.dequeue(4)).toBe(4);
    
    expect(queue.tail).toBe(1);
});

// 8. Bug Head
test('Bug ตรง this.head == 0;', () => {
    const queue = new Queue(3);
    expect(queue.enqueue(1)).toBe(true);
    expect(queue.enqueue(2)).toBe(true);
    expect(queue.enqueue(3)).toBe(true);

    expect(queue.dequeue(1)).toBe(1);
    expect(queue.dequeue(2)).toBe(2);
    expect(queue.dequeue(3)).toBe(3);

    expect(queue.head).toBe(0);
});