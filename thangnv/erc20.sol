pragma solidity ^0.4.25;
    
contract VinToken{
    
    uint totalToken;
    
    struct Onwer{
        address id;
        uint tokenOnwer;
    }        
    
    mapping(address=>Onwer)toOnwer;
    
    mapping(address => mapping(address => uint)) allowed;
    
    constructor(){  
        totalToken=1000;
    }
    
    function totalSupply() public view returns(uint){
        return totalToken;
    }
    
    function register() checkRegister(){
        Onwer memory onwer = Onwer(msg.sender,100);
        toOnwer[msg.sender]=onwer;
    }
    
    function balanceOf (address _owner) public returns (uint){
        return toOnwer[_owner].tokenOnwer;
    }
    
    function balance () public returns (uint){
        return toOnwer[msg.sender].tokenOnwer;
    }
    
    function transfer(address to, uint tokens) public checkOnwer() checkNumberToken(tokens) returns (bool) {
        toOnwer[msg.sender].tokenOnwer-=tokens;
        toOnwer[to].tokenOnwer+=tokens;
        return true;
    }
    
    function transferFrom(address _from, address _to, uint _value)public checkAllowance(_from,_value) returns (bool){
        toOnwer[_from].tokenOnwer-=_value;
        allowed[_from][msg.sender]-=_value;
        toOnwer[_to].tokenOnwer+=_value;
        return true;
    }
    
    function approve(address _spender, uint _value)public checkNumberToken(_value) returns (bool){
        allowed[msg.sender][_spender]=_value;
        return true;
    }
    
    function allowance (address _owner, address _spender)public returns (uint){
        return allowed[_owner][_spender];
    }
    
    modifier checkOnwer(){
        require(msg.sender==toOnwer[msg.sender].id,"Bạn chưa có tài khoản tài khoản");
        _;
    }
    
    modifier checkRegister(){
        require(msg.sender!=toOnwer[msg.sender].id,"Bạn đã tạo tài khoản  rồi");
        _;
    }
    
    modifier checkNumberToken(uint tokens){
        require(toOnwer[msg.sender].tokenOnwer>=tokens,"Số token của bạn nhỏ hơn số  bạn đang chọn ");
        _;
    }
    
    modifier checkAllowance(address _from,uint tokens){
        require(allowance(_from,msg.sender)>=tokens,"Số token được ủy quyền  cho bạn nhỏ hơn số  bạn đang chọn ");
        _;
    }
}