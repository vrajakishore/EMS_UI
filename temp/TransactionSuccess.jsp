
<body>
<table>
             <tbody>
                 <%
                 //IBankService service=new BankServiceImpl();
                 
                 BankAccount acc=new BankAccount();
                 //acc=service.userValidation(String username, String password)
                 %>
                 <tr>
                 <td>Welcome</td>
                 </tr>
                 <tr>
                 <td>Account Holder First Name</td>
                     <td><%=request.getParameter("firstname")%></td>
                  </tr>
                  <tr>   
                   <td>Account Holder Last Name</td>
                     <td><%=request.getParameter("lastname")%></td>
                     </tr>
                     <tr>
                      <td>Account Number</td>
                     <td><%=request.getParameter("accountnum")%></td>
                     </tr>
                     <tr>
                     <td>Transaction Id</td>
                     <td><%=request.getParameter("transactionId")%></td>
                     </tr>
                     <tr>
                     <td>Paid Amount</td>
                     <td><%=request.getParameter("paidamount")%></td>
                 </tr>
                <tr>
                     <td>Date</td>
                     <td><%=request.getParameter("date")%></td>
                     </tr>
                     
                       <tr>
                     <td>Transaction Status</td>
                     <td><%=request.getParameter("status")%></td>
                     </tr>
                     
                    
             <tbody>
             
             
             
         </table>    
</body>
</html>