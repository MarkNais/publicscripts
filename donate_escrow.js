function({caller:C,calling_script:S,this_script:T}, A)
{
	//var caller = context.caller;
	var l = #s.scripts.lib();
	if(A==null||A=={}) return {ok:false,msg:"An -escrow- test, pleaes use !donate!:+true+"}
	if(!A.donate) return {ok:true,msg:"`5:-(`"} //They refused!

	if(A.donate){                               //They accepted!
	    var result = #s.escrow.charge({cost:100, is_unlim:false});
	    if (result) return result;
        return {ok:true,msg:"`0T``1h``2a``3n``4k``5s`!"}
	}

	return { ok:false, msg:"wrong args! run with {}" };
}
