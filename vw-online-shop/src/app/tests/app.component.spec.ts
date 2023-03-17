describe("Test demo",()=>{
    it("test is working",()=>expect(true).toBe(false));
    it("test numeric value",()=>expect(12).toBeGreaterThan(10));
    it("test string value",()=>expect("Mumbai").toMatch("^Mum"));
});