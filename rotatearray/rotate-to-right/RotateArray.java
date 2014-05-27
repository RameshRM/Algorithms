/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
public class RotateArray
{

	public static List<Object> rotateArray(List<Object> inputs, int k){
		
		int counter=-1;
		int end = inputs.size();
		int start = end-k;
		Object current;
		Object shifted;
		for(int i=start; i<end; i++){
			counter++;
			shifted = inputs.get(i);
			current = inputs.get(counter);
			inputs.set(i, current);
			inputs.set(counter, shifted);
		}
		
		return inputs;
		
	}

	
}
